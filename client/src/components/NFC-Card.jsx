export default function NFCCard({titles}) {
  return (
    <div className='flex p-2 gap-2 items-center'>
      {titles.map((title, i) => (
        <div
          className='p-2 flex flex-col items-center justify-center drop rounded-lg shadow-lg hover:shadow-md transition-shadow duration-150'
          key={i}>
          <img
            src='https://placehold.co/150'
            className='w-full h-32 object-cover rounded-lg mb-4 shadow-lg'
            alt={`${title} Image`}
          />
          <p className='font-medium text-center'>{title}</p>
        </div>
      ))}
    </div>
  )
}
