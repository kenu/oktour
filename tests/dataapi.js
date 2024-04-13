import axios from 'axios'

async function getData(params) {
  const numOfRows = params.numOfRows || 10
  const response = await axios.get(
    `https://apis.data.go.kr/B551011/DataLabService/metcoRegnVisitrDDList?numOfRows=${numOfRows}&pageNo=1&MobileOS=ETC&MobileApp=OKTOUR&serviceKey=4MjolsmxrlqEv3hEBeSleWCFNguNi2rJoQBKD9xtry0x4uqqnpUcOJinPQt9Q0ASv%2Funl57K%2BVb5QjHvjDLAuQ%3D%3D&_type=json&startYmd=20230101&endYmd=20231231`
  )

  expect(response.status).toBe(200)

  const { data } = response
  return data
}

export default getData
