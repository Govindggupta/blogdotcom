export default async function AllUsers({ params }: any) {
  await new Promise((r) => setTimeout(r, 5000));
  const users = (await params).users;


  return (
    <div>
      This is the page for the all Users
      <div>{users}</div>
      <div>Currently this user is logged in !!!</div>
    </div>
  );
}
