import { SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";

const LoginRegisterButtons = () => {
  return (
    <>
      <div className="flex">
        <div className="m-2 rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700">
          <SignInButton />
        </div>
        <div className="m-2 rounded bg-lime-500 px-4 py-2 font-bold text-white hover:bg-lime-700">
          <SignUpButton />
        </div>
      </div>
    </>
  );
};

const SignOutCSSedButton = () => {
  return (
    <div className="m-2 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700">
      <SignOutButton />
    </div>
  );
};

export const Navbar = (props: { isAuth: boolean }) => {
  return (
    <div className="flex justify-between bg-sky-200">
      <div className="flex">
        <span className="m-2 text-xl font-semibold tracking-tight">Hermes</span>
      </div>
      {!props.isAuth && <LoginRegisterButtons />}
      {!!props.isAuth && <SignOutCSSedButton />}
    </div>
  );
};
