const Path = function (path) {
    return function (view) {
        view.component = function () {
            return view;
        };
        view.path = function () {
            return path;
        }
    };
};

export default Path;