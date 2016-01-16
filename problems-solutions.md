# Problems and Solutions

* [Setting up Travis](#travis)
* [Testing Hapi](#hapi)
* [Setting up CodeCov](#codecov)

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
<img src="https://files.gitter.im/heron2014/IQWi/coverage_travis.png" width="550" style="display: block">

### Solution
* Add `--user` flag to `.travis.yml`
```
before_install:
    pip install --user codecov
    ```
