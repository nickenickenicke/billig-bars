export const LogOutButton = () => {
  return (
    <form action="/auth/signout" method="post">
      <button className="" type="submit">
        Log out
      </button>
    </form>
  )
}
