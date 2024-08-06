import AppButton from "../../component/button/appButton"

const SocailTask = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-12 pr-12 pb-12 pl-12">
      <div className="w-full text-center">
        <h1 className="font-bold text-4xl">Social Tasks</h1>
        <p className="mt-5">Complete the Social Tasks to earn extra $Heart token</p>
      </div>
      <div className="border border-red-200 rounded-md p-4 w-full mt-5">
        <div className="flex items-center">
          <div className="ml-4">
            <h2 className="text-lg font-semibold">Connect Your X account</h2>
            <p className="text-sm text-gray-600">You need connect your X account to join Social Task</p>
            <a href="#" className="text-blue-500 text-sm underline">Learn more </a>
          </div>
        </div>
        <div className="p-4">
          <AppButton className="bg-orange-500 text-white py-2 px-4 rounded-full" >Connect your X account</AppButton>
        </div>
      </div>
    </div >
  )
}

export default SocailTask
