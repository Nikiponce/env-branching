// Get the graph container HTML element.
const graphContainer = document.getElementById("graph-container");

var branchesOrder = ['develop', 'qa', 'pre', 'master'];
var compareBranchesOrder = function(a, b) {
    return branchesOrder.indexOf(a) - branchesOrder.indexOf(b);
};

const options = {
    'orientation': 'vertical',
    // 'mode': 'compact',
    compareBranchesOrder: compareBranchesOrder
}

// Instantiate the graph.
const gitgraph = GitgraphJS.createGitgraph(graphContainer, options);

// Simulate git commands with Gitgraph API.
const master = gitgraph.branch({
    "name": "master",
    "style": {
    "color": "green",
    "label": {
        "color": "green",
        }
    }
}).commit("Initial commit");

const develop = master.branch({
    "name": "develop",
    "style": {
    "color": "purple",
    "label": {
        "color": "purple",
        }
    }
});

const qa = master.branch({
    "name": "qa",
    "style": {
    "color": "orange",
    "branch": {
        "color": "orange"
    },
    "label": {
        "strokeColor": 'orange',
        "color": "orange",
        }
    }
});

const pre = master.branch({
    "name": "pre",
    "style": {
    "color": "red",
    "label": {
        "color": "red",
        }
    }
});