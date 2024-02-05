  async function userData (){
    const user = await fetch('https://api/auth',{
      method: 'POST',
    })

    const res = await user.json()
    const { userId } = res;
    return userId 
  }

export default async function RoadMap() {

  return (
  <main className="md:pl-[8rem] px-2 pt-4 md:pt-[5.7rem] md:pr-[18rem]">
    <h1>RoadMap</h1>
    <div className="w-full flex items-center justify-center cursor-pointer">
      user
    </div>
    <div></div>
  </main>
  )
}
