# Problems and Solutions

* [Setting up Travis](#travis)
* [Testing Hapi](#hapi)
* [Setting up CodeCov](#codecov)
* [Serving our index page](#index)
* [Weird error with Material-UI components](#material-ui)

## <a name="travis"><a> Problem: **Setting up Travis**
1. How to get our repo into Travis

2. Failing Travis build
    - No .travis.yml detected

![alt text](https://files.gitter.im/heron2014/Y56k/travis_error.png)

    - Unable to resolve tape

![alt text](https://files.gitter.im/heron2014/rsoG/tape_travis_issue.png)

### Solution
1. [Authorising Travis in GitHub](https://github.com/globetown/crushlines/issues/5#issuecomment-172203106)
2. Failing Travis build
    - Forgot the preceding `.` in front of `.travis.yml`
    - tape was missing from `package.json`

## <a name="hapi"></a> Problem: **Testing that our server is an instance of Hapi.Server**
### Solution
* Used Javascript [__instanceof operator__](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)

```js
t.equal(server instanceof Hapi.Server, true);
```
* `server` is the object we get when we run `new Hapi.Server()`

* `Hapi.Server` is the constructor that produces a `server` object

## <a name="codecov"></a> Problem: **Setting up CodeCov**
* "Permission denied"

![alt text](https://files.gitter.im/heron2014/IQWi/coverage_travis.png)

### Solution
* Add `--user` flag to `.travis.yml`
```
before_install:
    pip install --user codecov
```

## <a name="index"><a> Problem: **Unable to serve our index.html**

### Solution
* Reference to `index.html` relative to the root of the project, **not** relative to your `server.js`

#### Before
![alt text](https://files.gitter.im/heron2014/cdLu/error-path.png)

#### After
https://github.com/globetown/crushlines/blob/3e740a10478cddd8a0768094cf64635459ec5d7d/lib/home.js#L9


## <a name="material-ui"><a> Problem: **Weird problem: `addComponentAsRefTo(...) in the dev tools`**

### Solution
* There's a problem if your npm version is below 3
* Solution was posted as an [issue in material-ui repo](https://github.com/callemall/material-ui#3001)
