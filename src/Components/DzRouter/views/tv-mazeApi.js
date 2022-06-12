const bazeUrl = 'https://api.tvmaze.com';

const fetchShowDetails = showId => {
    return fetch(`${bazeUrl}/shows/${showId}`).then(res => res.json())
}

const fetchShowsWithQuery = searchQuery => {
    return fetch(`${bazeUrl}/search/shows?q=${searchQuery}`).then(res => res.json())
    .then(entries => entries.map(entry => entry.show))
}

export default {
    fetchShowDetails,
    fetchShowsWithQuery
}