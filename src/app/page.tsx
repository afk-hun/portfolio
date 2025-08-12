export default function Home() {
  return (
    <div className=''>
      <div className='flex flex-row sm:flex-col md:flex-row lg:flex-col '>
        <h1 className='text-color-primary text-4xl font-bold'>
          Welcome to my portfolio!
        </h1>
        <p className='text-color-secondary'>Welcome to my portfolio!</p>
      </div>
      <div className='flex flex-row sm:flex-col md:flex-row lg:flex-col p-4 bg-dragon-ball border border-dragon-ball-border rounded-lg'>
        <h1 className='text-dragon-ball-primary text-4xl font-bold'>
          Welcome to dragon ball!
        </h1>
        <p className='text-dragon-ball-secondary'>Welcome to dragon ball!</p>
      </div>
    </div>
  );
}
