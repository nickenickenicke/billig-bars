export const LogOutButton = () => {
  return (
    <form action="/auth/signout" method="post" className="flex">
      <button className="flex-1 border-black bg-bg-pink" type="submit">
        Log out
      </button>
    </form>
  )
}
