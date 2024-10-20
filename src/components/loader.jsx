import { bouncy } from 'ldrs'

bouncy.register()

// Default values shown
function Loader(){
  return (
    <div className="loader" >
        <l-bouncy 
      size="45"
      speed="1.75" 
      color="black"></l-bouncy>
    </div>
)
}

export default Loader;