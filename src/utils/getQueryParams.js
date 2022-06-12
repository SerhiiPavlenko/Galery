import querySrting from 'query-string'


export default function getQueryParams (string) {
    return querySrting.parse(string)
}