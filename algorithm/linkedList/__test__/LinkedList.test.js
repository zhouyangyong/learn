import LinkList from '../LinkedList';

describe('测试链表', () => {
    it('创建一个空链表', () => {
        const linkedlist = new LinkedList();
        expect((linkedlist.head).toBeNull())
    })
})