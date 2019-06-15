-- getAllAsJson
select 
  (select json_agg(p) from project AS p) AS projects,
  (select json_agg(b) from board AS b) AS boards,
  (select json_agg(la) from lane AS la) AS lanes,
  (select json_agg(li) from list AS li) AS columns,
  (select json_agg(t) from task AS t) AS tasks;