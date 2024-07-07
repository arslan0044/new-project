import Link from "next/link";

export default function UserProfile({params}: any) {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="mb-12">Profile</h1>
          <hr />
          <p className="text-4xl">Profile page 
          <span className=" p-2 ml-2 rounded bg-orange-500 text-black">{params.id}</span>
          </p>
          <hr />
            <Link href={"/profile"} className="m-12 ">Back to Profile</Link>
          </div>
  )
}