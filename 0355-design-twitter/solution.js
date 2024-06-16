class TweetLinkedListNode {
    constructor (time, id, next) {
        this.time = time
        this.id = id
        this.next = next
    }
}
class TwitterUser {
    constructor() {
        this.following = new Set()
        this.tweets = false
    }

    post(tweetId, time) {
        if(!this.tweets) this.tweets = null
        let newTweet = new TweetLinkedListNode(time, tweetId, this.tweets)
        this.tweets = newTweet
        return this
    }

    follow(userId) {
        this.following.add(userId)
        return this
    }

    unfollow(userId) {
        this.following.delete(userId)
        return this
    }

    getFollowingList() {
        return Array.from(this.following.values())
    }

    getTweets() {
        return this.tweets
    }
}
class Twitter {
    constructor() {
        this.users = new Map()
        this.time = 0;
    }

    getUser (userId) {
        if (!this.users.has(userId)) this.users.set(userId, new TwitterUser())
        return this.users.get(userId)
    }

    setUser (userId, value) {
        if (!this.users.has(userId)) this.users.set(userId, new TwitterUser())
        this.users.set(userId, value)
    }

    postTweet(userId, tweetId) {
        this.setUser(userId, this.getUser(userId).post(tweetId, this.time))
        this.time++
    }

    getNewsFeed(userId) {
        const activityList = []
        const following = this.getUser(userId).getFollowingList()
        following.push(userId)
        for (let user of following) {
            const tweets = this.getUser(user).getTweets()
            if (tweets) activityList.push(tweets)
        }
        if (activityList.length === 0) return []
        let newsFeed = new MaxPriorityQueue({priority: (node) => node.time})  
        for (let tweet of activityList) {
            newsFeed.enqueue(tweet)
        }

        let n = 0, result = []
        while (!newsFeed.isEmpty() && n < 10) {
            const tweetNode = newsFeed.dequeue().element
            result.push(tweetNode.id)
            if (tweetNode.next) {
                newsFeed.enqueue(tweetNode.next)
            }
            n++
        }
        return result
    };

    follow(followerId, followeeId) {
        this.setUser(followerId, this.getUser(followerId).follow(followeeId))
    };

    unfollow(followerId, followeeId) {
        this.setUser(followerId, this.getUser(followerId).unfollow(followeeId))
    };
};
