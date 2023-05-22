import { GiBoarTusks } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function RegisterForm() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 lg:px-8 h-[calc(100vh-74px)]">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <GiBoarTusks className="mx-auto" color="#e2e8f0" size={50} />
        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-slate-300">
          Sign up
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label for="email" className="block text-sm font-medium leading-6 text-slate-300">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label for="password" className="block text-sm font-medium leading-6 text-slate-300">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-cyan-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <Link to="/login" className="font-semibold leading-6 text-cyan-400 hover:text-cyan-500 ml-2">
            Login now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
