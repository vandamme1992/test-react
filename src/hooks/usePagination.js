

const usePagination = (totalCount, totalPages, limit  ) => {
    Math.ceil(totalCount / limit)


        let result = []

        for(let i = 0; i< totalPages; i++) {
            result.push(i + 1)
        }

        return result



}
