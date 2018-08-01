import { Repository} from '../models/repository.interface'
import { USER_LIST} from './user.mocks'

const repositoryList: Repository[] = [
    {
        name: 'Repository 1',
        description: 'First Repository',
        owner: USER_LIST[0]

    },
    {
        name: 'Repository 2',
        description: 'Second Repository',
        owner: USER_LIST[0]

    }, {
        name: 'Repository 3',
        description: 'Third Repository',
        owner: USER_LIST[1]

    }, {
        name: 'Repository 4',
        description: 'Fourth Repository',
        owner: USER_LIST[1]

    },
]

export const REPOSITORY_LIST = repositoryList;