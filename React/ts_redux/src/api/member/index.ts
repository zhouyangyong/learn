import { MemberEntity } from '../../model';
import { members } from './mackData';

const fetchMemebers = ():Promise<MemberEntity[]> => {
  return Promise.resolve(members);
}

export const memberAPI = {
  fetchMemebers
}