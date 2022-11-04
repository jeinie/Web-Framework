import Fetch from "./Fetch";
import RepoMenu from "./RepoMenu";

const UseRepositories = ({ login, selectRepo, onSelect = f => f }) => (
    <Fetch
        uri = {`https://api.github.com/users/${login}/repos`}
        renderSuccess = { ({data}) => (
            <RepoMenu repositories={data} selectRepo={selectRepo} onSelect={onSelect} />
        )}
    />
)

export default UseRepositories;