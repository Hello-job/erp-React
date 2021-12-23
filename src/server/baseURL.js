let http
if (process.env.NODE_ENV === 'development') {
    http = 'https://erpm-dev.hiseemedical.com/api'
} else {
	http = process.env.REACT_APP_BASE_APP
}
export default http
