const colors = [
    {
        id: '-xekare',
        title: '과격한 빨강',
        rating: 3
    },
    {
        id: '-jdwsof',
        title: '큰 파랑',
        rating: 2
    },
]

const hashColors = colors.reduce(
    (hash, {id, title, rating}) => {
        hash[id] = {title, rating}
        return hash
    },
    {}
)
console.log(hashColors)