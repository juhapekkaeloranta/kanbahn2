#!/bin/bash

echo "INFO: Reseting schema"
psql "postgresql://kanbahnapp:finalkoira@localhost:2345/kanbahndbdev" --file src-database/ddl.sql

echo "INFO: Seeding db"
psql "postgresql://kanbahnapp:finalkoira@localhost:2345/kanbahndbdev" --file src-database/seed.sql

echo "INFO: Showing table"
psql "postgresql://kanbahnapp:finalkoira@localhost:2345/kanbahndbdev" -c "SELECT * FROM public.task"

echo "INFO: Done!"