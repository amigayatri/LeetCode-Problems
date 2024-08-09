class SmallestInfiniteSet {
    constructor() {
        this.addedIntegers = new TreeSet()
        this.currentInteger = 1
    }

    popSmallest() {
        if (this.addedIntegers.size == 0) {
            const answer = this.currentInteger
            this.currentInteger++
            return answer
        } else {
            const answer = this.addedIntegers.first()
            this.addedIntegers.delete(answer)
            return answer
        }
    }

    addBack(num) {
        if (this.currentInteger <= num || this.addedIntegers.has(num)) return
        this.addedIntegers.add(num)
    }
}
const RED = 1;
const BLACK = 2;

class TreeNode {
    constructor() {
        this.left = null;
        this.right = null;
        this.parent = null;
        this.key = null;
        this.color = RED;
    }

    grandparent() {
        let p = this.parent;
        if (p === null) return null;
        return p.parent;
    }

    sibling() {
        let p = this.parent;
        if (p === null) return null;
        if (this === p.left) return p.right;
        return p.left;
    }

    uncle() {
        let p = this.parent;
        if (p === null) return null;
        let g = p.parent;
        if (g === null) return null;
        return p.sibling();
    }
}
class KeyOnlyPolicy {
    fetch(n) {
        return n.key;
    }

    copy(dst, src) {
        dst.key = src.key;
    }

    toString(node) {
        return String(node.key);
    }
}
class JsIterator {
    constructor(container, valuePolicy = container.valuePolicy) {
        this.container = container;
        this.valuePolicy = valuePolicy;
        this.node = container.jsBegin();
    }

    next() {
        let res = {};
        res.done = (this.node === this.container.jsEnd());
        if (!res.done) {
            res.value = this.valuePolicy.fetch(this.node);
            this.node = this.container.next(this.node);
        }
        return res;
    }

    [Symbol.iterator]() {
        return this;
    }

    backwards() {
        return new JsReverseIterator(this.container, this.valuePolicy);
    }
}
class BaseIterator {
    constructor(node, container) {
        this.__n = node;
        this.__c = container;
    }

    equals(rhs) {
        let lhsClass = this.constructor.name;
        let rhsClass = rhs.constructor.name;
        if (lhsClass !== rhsClass) {
            throw new Error(`Can't compare an instance of ${lhsClass} with an instance of ${rhsClass}`);
        }
        if (this.__c !== rhs.__c) {
            throw new Error('Iterators belong to different containers');
        }
        return this.__n === rhs.__n;
    }

    get node() {
        return this.__n;
    }

    get key() {
        return this.__n.key;
    }

    get value() {
        return this.__n.value;
    }

    get container() {
        return this.__c;
    }
}

class Iterator extends BaseIterator {
    constructor(...args) {
        if (args.length === 2) {
            let [node, container] = args;
            super(node, container);
        } else if (args.length === 1) {
            let [obj] = args;
            let className = obj.constructor.name;
            if (className === Iterator.name) {
                super(obj.__n, obj.__c);
            } else if (className === ReverseIterator.name) {
                let c = obj.__c;
                super(c.next(obj.__n), c);
            } else {
                throw new Error(`Can't create an Iterator from ${className}`);
            }
        } else {
            throw new Error('Can\'t create an Iterator with provided parameters');
        }
    }

    next() {
        this.__n = this.__c.next(this.__n);
    }

    prev() {
        this.__n = this.__c.prev(this.__n);
    }
}

class InsertionResult {
    constructor(wasAdded, wasReplaced, iterator) {
        this.wasAdded = wasAdded;
        this.wasReplaced = wasReplaced;
        this.iterator = iterator;
    }
}
const INSERT_UNIQUE = 2;
class Head {
    constructor() {
        this.leftmost = this;
        this.rightmost = this;
        this.root = this;
        this.size = 0;
        this.id = 'HEAD';
    }
}


function compare(lhs, rhs) {
    if (lhs < rhs) {
        return -1;
    }
    else if (lhs === rhs) {
        return 0;
    }
    else {
        return 1;
    }
}

class Tree {
    constructor() {
        this.head = new Head();
        this.compare = compare;
        this.valuePolicy = new KeyOnlyPolicy();
    }

    clear() {
        this.head = new Head();
    }

    size() {
        return this.head.size;
    }

    compareNodes(lhs, rhs) {
        return this.compare(lhs.key, rhs.key);
    }

    replaceNode(oldNode, newNode) {
        if (oldNode === newNode) {
            return;
        }
        if (oldNode.parent === null) {
            this.head.root = newNode;
        } else {
            if (oldNode === oldNode.parent.left) {
                oldNode.parent.left = newNode;
            } else {
                oldNode.parent.right = newNode;
            }
        }

        if (!this.isLeaf(newNode)) {
            newNode.parent = oldNode.parent;
        }
    }

    rotateLeft(node) {
        let right = node.right;
        if (this.isLeaf(right)) {
            throw new Error('rotateLeft can\'t be performed. The tree is corrupted');
        }
        this.replaceNode(node, right);

        node.right = right.left;
        if (right.left !== null) {
            right.left.parent = node;
        }

        right.left = node;
        node.parent = right;
    }

    rotateRight(node) {
        let left = node.left;
        if (this.isLeaf(left)) {
            throw new Error('rotateRight can\'t be performed. The tree is corrupted');
        }
        this.replaceNode(node, left);

        node.left = left.right;
        if (left.right !== null) {
            left.right.parent = node;
        }

        left.right = node;
        node.parent = left;
    }

    isLeaf(node) {
        if (node === null || node === this.head) {
            return true;
        }
        return false;
    }

    fetchColor(node) {
        if (this.isLeaf(node)) {
            return BLACK;
        } else {
            return node.color;
        }
    }

    isBlack(node) {
        return (this.fetchColor(node) === BLACK);
    }

    isRed(node) {
        return (this.fetchColor(node) === RED);
    }

    insertUnique(node) {
        return this.insertNode(node, INSERT_UNIQUE);
    }

    insertNode(n, mode = INSERT_UNIQUE) {
        let res = this.insertNodeInternal(this.head.root, n, mode);
        if (res.wasAdded) {
            if (this.head.size === 0) {
                this.head.root = n;
                this.head.leftmost = n;
                this.head.rightmost = n;

                n.left = this.head;
                n.right = this.head;
            } else if (this.head.leftmost.left === n) {
                this.head.leftmost = n;
                n.left = this.head;
            } else if (this.head.rightmost.right === n) {
                this.head.rightmost = n;
                n.right = this.head;
            }
            this.insertRepairTree(n);
            this.head.size = this.head.size + 1;
        }
        return res;
    }

    insertNodeInternal(root, n, mode) {
        let x = root;
        let y = null;
        let rc = -1;
        while (!this.isLeaf(x)) {
            y = x;
            rc = this.compareNodes(n, y);
            if (rc < 0) {
                x = y.left;
            } else if (rc > 0) {
                x = y.right;
            } else {
                switch (mode) {
                    case INSERT_UNIQUE:
                        return new InsertionResult(false, false, undefined);
                    case INSERT_REPLACE:
                        this.valuePolicy.copy(y, n);
                        return new InsertionResult(false, true, new Iterator(y, this));
                    default:
                        x = y.right;
                }
            }
        }
        if (this.isLeaf(y)) {
            n.parent = null;
            n.left = this.head;
            n.right = this.head;
        }
        else {
            n.parent = y;
            if (rc < 0) {
                y.left = n;
            }
            else {
                y.right = n;
            }
        }
        return new InsertionResult(true, false, new Iterator(n, this));
    }


    insertRepairTree(n) {
        if (n.parent === null) {
            this.repairCase1(n);
        } else if (this.isBlack(n.parent)) {

        } else if (this.isRed(n.uncle())) {
            this.repairCase3(n);
        } else {
            this.repairCase4(n);
        }
    }

    repairCase1(n) {
        n.color = BLACK;
    }

    repairCase3(n) {
        n.parent.color = BLACK;
        n.uncle().color = BLACK;
        n.grandparent().color = RED;
        this.insertRepairTree(n.grandparent());
    }

    repairCase4(n) {
        let p = n.parent;
        let g = n.grandparent();

        let nr = null;
        if ((g.left !== null)
            && (n === g.left.right)) {
            this.rotateLeft(p);
            n = n.left;
        } else if ((g.right !== null)
            && (n === g.right.left)) {
            this.rotateRight(p);
            n = n.right;
        }

        p = n.parent;
        g = n.grandparent();
        if (n === p.left) {
            this.rotateRight(g);
        } else {
            this.rotateLeft(g);
        }

        p.color = BLACK;
        g.color = RED;
    }

    fetchMaximum(node) {
        while (!this.isLeaf(node.right)) {
            node = node.right;
        }
        return node;
    }

    fetchMinimum(node) {
        while (!this.isLeaf(node.left)) {
            node = node.left;
        }
        return node;
    }

    erase(node) {
        if (this.isLeaf(node)) {
            return;
        }
        this.eraseInternal(node);
        let h = this.head;
        h.size = h.size - 1;
    }

    eraseInternal(node) {
        if (!this.isLeaf(node.left)
            && !this.isLeaf(node.right)) {
            let pred = this.fetchMaximum(node.left);
            this.valuePolicy.copy(node, pred);
            node = pred;
        }

        let child = (this.isLeaf(node.right)) ? node.left : node.right;
        if (this.isBlack(node)) {
            this.eraseCase1(node);
        }
        this.replaceNode(node, child);
        if (this.head.size === 2) {
            if (!this.isLeaf(child)) {
                // Root node must be BLACK
                child.color = BLACK;
            }
        }

        let h = this.head;
        if (this.isLeaf(child)) {
            if (h.leftmost === node) {
                let p = node.parent;
                if (p !== null) {
                    h.leftmost = p;
                    p.left = h;
                } else {
                    h.leftmost = h;
                }
            }
            if (h.rightmost === node) {
                let p = node.parent;
                if (p !== null) {
                    h.rightmost = p;
                    p.right = h;
                } else {
                    h.rightmost = h;
                }
            }
        } else {
            if (h.leftmost === node) {
                h.leftmost = child;
                child.left = h;
            }
            if (h.rightmost === node) {
                h.rightmost = child;
                child.right = h;
            }
        }
    }

    eraseCase1(node) {
        if (node.parent === null) {
            return;
        } else {
            this.eraseCase2(node);
        }
    }

    eraseCase2(node) {
        let s = node.sibling();
        if (this.isRed(s)) {
            node.parent.color = RED;
            s.color = BLACK;
            if (node === node.parent.left) {
                this.rotateLeft(node.parent);
            } else {
                this.rotateRight(node.parent);
            }
        }
        this.eraseCase3(node);
    }

    eraseCase3(node) {
        let s = node.sibling();
        let p = node.parent;
        if (this.isBlack(p)
            && this.isBlack(s)
            && this.isBlack(s.left)
            && this.isBlack(s.right)) {

            s.color = RED;
            this.eraseCase1(p);
        } else {
            this.eraseCase4(node);
        }
    }

    eraseCase4(node) {
        let s = node.sibling();
        let p = node.parent;
        if (this.isRed(p)
            && this.isBlack(s)
            && this.isBlack(s.left)
            && this.isBlack(s.right)) {

            s.color = RED;
            p.color = BLACK;
        } else {
            this.eraseCase5(node);
        }
    }

    eraseCase5(node) {
        let s = node.sibling();
        let p = node.parent;
        if (node === p.left && this.isRed(s.left) && this.isBlack(s.right)) {
            s.color = RED;
            s.left.color = BLACK;
            this.rotateRight(s);
        } else if (node === p.right
            && this.isBlack(s.left)
            && this.isRed(s.right)) {

            s.color = RED;
            s.right.color = BLACK;
            this.rotateLeft(s);
        }
        this.eraseCase6(node);
    }

    eraseCase6(node) {
        let s = node.sibling();
        let p = node.parent;
        s.color = this.fetchColor(p);
        p.color = BLACK;
        if (node === p.left) {
            s.right.color = BLACK;
            this.rotateLeft(p);
        } else {
            s.left.color = BLACK;
            this.rotateRight(p);
        }
    }

    find(k) {
        let y = this.head;
        let x = y.root;
        while (!this.isLeaf(x)) {
            let rc = this.compare(x.key, k);
            if (rc > 0) {
                y = x;
                x = x.left;
            } else if (rc < 0) {
                y = x;
                x = x.right;
            } else {
                return new Iterator(x, this);
            }
        }
        return new Iterator(this.head, this);
    }

    begin() {
        return new Iterator(this.head.leftmost, this);
    }

    end() {
        return new Iterator(this.head, this);
    }

    jsBegin() {
        return this.head.leftmost;
    }

    jsEnd() {
        return this.head;
    }

    next(n) {
        if (n === this.head) {
            return this.head.leftmost;
        }
        if (n.right === this.head) {
            return this.head;
        }
        if (n.right !== null) {
            let res = this.fetchMinimum(n.right);
            return res;
        } else {
            while (n.parent.left !== n) {
                n = n.parent;
            }
            return n.parent;
        }
    }

    prev(n) {
        if (n === this.head) {
            return this.head.rightmost;
        }
        if (n.left === this.head) {
            return this.head;
        }
        if (n.left !== null) {
            let res = this.fetchMaximum(n.left);
            return res;
        } else {
            while (n.parent.right !== n) {
                n = n.parent;
            }
            return n.parent;
        }
    }

    [Symbol.iterator]() {
        return new JsIterator(this);
    }

    entries() {
        return new JsIterator(this);
    }

    keys() {
        return new JsIterator(this, new KeyOnlyPolicy());
    }

    values() {
        return new JsIterator(this, new ValueOnlyPolicy());
    }

    first() {
        if (this.size() === 0) {
            return undefined;
        }
        else {
            let it = this.begin();
            return this.valuePolicy.fetch(it.node);
        }
    }

    last() {
        if (this.size() === 0) {
            return undefined;
        } else {
            let it = this.rbegin();
            return this.valuePolicy.fetch(it.node);
        }
    }

    toString() {
        let parts = [];
        for (let it = this.begin(); !it.equals(this.end()); it.next()) {
            // convert each key-value pair
            parts.push(this.valuePolicy.toString(it.node));
        }
        return '{' + parts.join(',') + '}';
    }

    get [Symbol.toStringTag]() {
        return 'Tree';
    }

    static get [Symbol.species]() {
        return Tree;
    }

}

class TreeSet {
    constructor(iterable) {
        this.__t = new Tree();
        this.__t.valuePolicy = new KeyOnlyPolicy();
        if ((iterable !== undefined)
            && (iterable !== null)) {
            if (iterable[Symbol.iterator] !== undefined) {
                for (let k of iterable) {
                    this.add(k);
                }
            }
            else {
                throw new Error('TreeSet constructor accepts only iterable objects');
            }
        }
    }

    get [Symbol.toStringTag]() {
        return 'TreeSet';
    }

    static get [Symbol.species]() {
        return TreeSet;
    }

    clear() {
        this.__t.clear();
    }

    delete(key) {
        let it = this.__t.find(key);
        if (!it.equals(this.__t.end())) {
            this.__t.erase(it.node);
        }
    }

    entries() {
        return this.__t.entries();
    }

    forEach(callback) {
        for (let k of this.__t) {
            callback(k, k, this);
        }
    }

    has(key) {
        let it = this.__t.find(key);
        if (!it.equals(this.__t.end())) {
            return true;
        }
        else {
            return false;
        }
    }

    keys() {
        return this.__t.keys();
    }

    add(key) {
        let n = new TreeNode();
        n.key = key;
        this.__t.insertUnique(n);
    }

    get size() {
        return this.__t.size();
    }

    values() {
        return this.__t.keys();
    }

    [Symbol.iterator]() {
        return this.__t[Symbol.iterator]();
    }

    begin() {
        return this.__t.begin();
    }

    end() {
        return this.__t.end();
    }

    find(key) {
        return this.__t.find(key);
    }

    insertUnique(key) {
        let n = new TreeNode();
        n.key = key;
        return this.__t.insertUnique(n);
    }
    first() {
        return this.__t.first();
    }

    last() {
        return this.__t.last();
    }
}

