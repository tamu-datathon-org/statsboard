
// Handle calls to /api/stats

export default function handle(req, res) {
    console.log(req.method) // The request method
    console.log(req.body) // The request body
    console.log(req.query) // The url querystring
    console.log(req.cookies) // The passed cookies
    
    res.json({success: true});
}