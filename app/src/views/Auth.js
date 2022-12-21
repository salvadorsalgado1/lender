import Card from "../components/Card"
import Email from "../components/forms/fields/Email"
import FirstName from "../components/forms/fields/FirstName"
import LastName from "../components/forms/fields/LastName"
import FormControl from "../components/forms/FormControl"

const Auth  = ()=>{
    return(
      <Card>
        <FormControl>
          <Email/>
          <FirstName/>
          <LastName/>
        </FormControl> 
      </Card>
    )
}
export default Auth