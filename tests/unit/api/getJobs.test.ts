import axios from 'axios'
import type { Mock } from 'vitest'
import getJobs from '../../../src/api/getJobs'

vi.mock('axios')
const axiosGetMock = axios.get as Mock
describe('getJobs', () => {
    beforeEach(() => {
        axiosGetMock.mockResolvedValue({
            data: [
                {
                    id: 1,
                    title: 'Java Engineer'
                }
            ]
        })
    })

    it('fetches job that candidates can apply to', async () => {
        await getJobs()
        expect(axios.get).toHaveBeenCalledWith('http://myfakeapi:3000/jobs')
    })

    it('Expects jobs from response', async () => {
        const jobs = await getJobs()
        expect(jobs).toEqual([
            {
                id: 1,
                title: 'Java Engineer'
            }
        ])
    })
})
