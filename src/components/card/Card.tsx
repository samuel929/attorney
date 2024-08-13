import { Card } from "@/components/ui/card";
import { Sheriff } from "@/types";
import { useState } from "react";

type CardProps = React.ComponentProps<typeof Card>;
interface IProps {
  sheriff: Sheriff;
  props?: CardProps;
  className?: string;
}

export function CardDemo({ sheriff, className, ...props }: IProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the message to the sheriff
    setMessage("");
  };
  return (
    <>
      <h2 className='text-2xl font-bold text-blue-800 mb-4 w-full'>
        {sheriff.name}
      </h2>
      <p className='text-gray-600 mb-2'>Email: {sheriff.contactDetail}</p>
      <p className='text-gray-600 mb-2'>Phone: {sheriff.phoneNumber}</p>
      <div className='mb-2'>
        <p className='text-lg font-semibold text-blue-700 '>Location</p>
        <p className='text-gray-600 text-[20px]'> {sheriff.city}</p>
      </div>
      <form onSubmit={handleSubmit} className='mt-6'>
        <textarea
          className='w-full p-2 border border-gray-300 rounded mb-4'
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Type your message here...'
        />
        <button
          type='submit'
          className='w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300'
        >
          Send Message
        </button>
      </form>
    </>
  );
}
