import { HomeContainer } from "./home.styles"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { UserData } from "../../store/slices/auth-slice"
import CourseList from "../../components/course-list/course-list.component"
const Home = () => {

    const currentUser = useSelector<RootState, UserData | null>(state => {
        return state.auth.currentUser
    })

    return <>
    <HomeContainer>
        {
            currentUser ? <CourseList /> : <h1>Welcome to Course Management</h1>
        }
    </HomeContainer>
    </>
}

export default Home