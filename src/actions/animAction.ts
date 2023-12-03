'use server'
// 이 코드에 작성된 모든 내용은 서버 작업임을 알림
// 서버 컴포넌트, 클라이언트 컴포넌트 모두 호출 가능

const LIMIT_PER_PAGE_COUNT = 12;

export const fetchAnim = async (curPage: number = 1, order: Order = 'popularity') => {

    const response = await fetch(`https://shikimori.one/api/animes?page=${curPage}&limit=${LIMIT_PER_PAGE_COUNT}&order=${order}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data: Anim[] = await response.json();

    return data;
}