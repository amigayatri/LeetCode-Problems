/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * function HtmlParser() {
 *
 *		@param {string} url
 *     	@return {string[]}
 *     	this.getUrls = function(url) {
 *      	...
 *     	};
 * };
 */

/**
 * @param {string} startUrl
 * @param {HtmlParser} htmlParser
 * @return {string[]}
*/
var crawl = function (startUrl, htmlParser) {
    const seen = new Set([startUrl]), res = [startUrl]
    const getHostName = (url) => url.split('/')[2]
    const dfs = (url, hostname) => {
        const linksFromHere = htmlParser.getUrls(url)
        for (const link of linksFromHere) {
            if (!seen.has(link)) {
                const linkHost = getHostName(link)
                if (linkHost === hostname) {
                    seen.add(link)
                    res.push(link)
                    dfs(link, linkHost)
                }
            }
        }
    }
    dfs(startUrl, getHostName(startUrl))
    return res
};
