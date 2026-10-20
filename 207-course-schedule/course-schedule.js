/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = Array.from(
        { length: numCourses },
        () => []
    );

    const indegree = Array(numCourses).fill(0);
    for (const [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
    indegree[course]++;
};
const queue = [];

for (let course = 0; course < numCourses; course++) {
    if (indegree[course] === 0) {
        queue.push(course);
    }
};

 let head = 0;
    let completed = 0;
while (head < queue.length) {
    const course = queue[head];
    head++;

    completed++;

    for (const nextCourse of graph[course]) {
        indegree[nextCourse]--;

        if (indegree[nextCourse] === 0) {
            queue.push(nextCourse);
        }
    }
};
return completed === numCourses;
};