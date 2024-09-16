class SnakeGame {
    constructor(width, height, food) {
        this.snake = [[0, 0]];
        this.snakeBody = new Set();
        this.score = 0;
        this.width = width;
        this.height = height;
        this.food = food;
        [this.currFoodX, this.currFoodY] = this.food.shift();

        this.currX = 0;
        this.currY = 0;

        this.moves = {
            'L': [0, -1],
            'U': [-1, 0],
            'R': [0, 1],
            'D': [1, 0]
        }
    }

    move(direction) {
        const [nextX, nextY] = this.moves[direction];

        this.currX += nextX;
        this.currY += nextY;

        const isCurrXWithinBounds = this.currX >= 0 && this.currX < this.height;
        const isCurrYWithinBounds = this.currY >= 0 && this.currY < this.width;

        if (!isCurrXWithinBounds || !isCurrYWithinBounds) return -1;
        this.snake.push([this.currX, this.currY]);
        const head = `${this.currX},${this.currY}`;

        if (this.currFoodX === this.currX && this.currFoodY === this.currY) {
            this.score++;
            if (this.food.length > 0) {
                [this.currFoodX, this.currFoodY] = this.food.shift();
            } else {
                [this.currFoodX, this.currFoodY] = [-1, -1];
            }
        } else {
            const [tailX, tailY] = this.snake.shift();
            const tail = `${tailX},${tailY}`;
            this.snakeBody.delete(tail);
        }
        if (this.snakeBody.has(head)) return -1;

        this.snakeBody.add(head);

        return this.score;
    }
}
