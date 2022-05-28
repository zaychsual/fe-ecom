export default function({ $auth, redirect }) {
  //check if logged in
  if($auth.loggedIn) {
    if($auth.strategy.name == "admin") {
      return redirect('/admin/dashboard')
    }

    //check role customer
    if($auth.strategy.name == "customer") {
      return redirect('/customer/dashboard')
    }
  }
}
