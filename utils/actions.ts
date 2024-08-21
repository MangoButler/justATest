"use server";
import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (prevState: any, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  //   const rawData = Object.fromEntries(formData);
  const newUser: User = { firstName, lastName, id: Date.now().toString() };

  try {
    await saveUser(newUser);
    revalidatePath("/actions");
    return "User was created successfully";
  } catch (error) {
    console.log(error);
    return "Failed to create user";
  }

  //   redirect("/actions"); ; do not place redirects in the try - block, place after the catch block
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile("users.json", { encoding: "utf-8" });
  const users = result ? JSON.parse(result) : [];
  return users;
};

const saveUser = async (user: User) => {
  const users = await fetchUsers();

  users.push(user);
  await writeFile("users.json", JSON.stringify(users));
};

export const deleteUser = async (formData: FormData) => {
  // the id can be passed via a hidden input, problem is that this hidden input can be seen in the html, thus the user id would be exposed
  const id = formData.get("id") as string;
  console.log(id);
  const users = await fetchUsers();
  const filteredUsers = users.filter((user) => user.id !== id);

  await writeFile("users.json", JSON.stringify(filteredUsers));
  revalidatePath("/actions");
};
export const removeUser = async (id: string, formData: FormData) => {
  const name = formData.get("name") as string;
  console.log(name);
  const users = await fetchUsers();
  const filteredUsers = users.filter((user) => user.id !== id);

  await writeFile("users.json", JSON.stringify(filteredUsers));
  revalidatePath("/actions");
};
