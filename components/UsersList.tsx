import { fetchUsers } from "@/utils/actions";
import DeleteButton from "./DeleteButton";

export default async function UsersList() {
  const users = await fetchUsers();

  return (
    <div className="mt-4">
      <h1 className="text-xl mb-4">List of Users</h1>
      {users.length ? (
        <div>
          {users.map((user) => (
            <h4 key={user.id} className="capitalize text-lg flex justify-between items-center mb-2">
              {user.firstName} {user.lastName}
              <DeleteButton id={user.id} />
            </h4>
          ))}
        </div>
      ) : (
        <p>No users found...</p>
      )}
    </div>
  );
}
