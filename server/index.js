import { crawlerPromise, extractYahooNewsHeader } from './crawler';
import http from 'http';

http.createServer(async (req, res) => {
	let body, result;
	try {
		body = await crawlerPromise('https://tw.yaoo.com/');
		result = JSON.stringify(extractYahooNewsHeader(body));
	} catch (e) {
		result = e;
	}

	res.end(result);
}).listen(3000);
