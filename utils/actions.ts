"use server";
import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (formData: FormData) => {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  //   const rawData = Object.fromEntries(formData);
  const newUser: User = { firstName, lastName, id: Date.now().toString() };
  try {
    await saveUser(newUser);
    revalidatePath("/actions");
    // redirect("/actions"); do not place redirects in the try - block, place after the catch block
  } catch (error) {
    console.log(error);
  }

  //   redirect("/actions");
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
