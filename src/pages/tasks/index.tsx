import { ListTasks } from "../../components/ListTasks";
import { TopBar } from "../../components/TopBar";


export default function Tasks() {

  return (
    <div>
      <TopBar buttonAdd={true} />
      <ListTasks />
    </div>
  )
}