-- Truncate tables
TRUNCATE project CASCADE;
TRUNCATE "user" CASCADE;

--Projects
INSERT INTO project ("id", "name")
VALUES 
(1, 'Project 1');

INSERT INTO project ("id", "name")
VALUES 
(2, 'Secret Project 1');

--Users
INSERT INTO "user"
VALUES ('116973995376159661774');

INSERT INTO "user"
VALUES ('123');

INSERT INTO "user"
VALUES ('321');

--Project owners
INSERT INTO project_owners_user
VALUES (1, '116973995376159661774');

INSERT INTO project_owners_user
VALUES (2, '123');

INSERT INTO project_owners_user
VALUES (2, '321');

--Boards
INSERT INTO board ("id", "name", "project")
VALUES
(1, 'Board 1', 1);

INSERT INTO board ("id", "name", "project")
VALUES
(2, 'Secret Board 1', 2);

--Lanes
INSERT INTO lane ("id", "name", "board")
VALUES
(1, 'Feature 1', 1),
(2, 'Feature 2', 1);

--Lists
INSERT INTO list ("id", "name", "lane")
VALUES
(1, 'Todo', 1),
(2, 'In progress', 1),
(3, 'Done', 1),
(4, 'Todo', 2),
(5, 'In progress', 2),
(6, 'Done', 2);

--Tasks

INSERT INTO task ("id", "title", "sortindex", "list")
VALUES
(1, 'Tests', 1, 1),
(2, 'APIs', 2, 1),
(3, 'UI code', 1, 2),
(4, 'SQL code', 1, 3),
(5, 'Drag-n-drop', 1, 1),
(6, 'End-points for CRUD operations', 2, 4),
(7, 'Better styling', 1, 4),
(8, 'Buttons and UI for CRUD operations', 3, 4),
(9, 'Show well formatted state in a crude UI', 1, 6);