ALTER TABLE tasks
    ADD COLUMN max_worker_id INTEGER NOT NULL DEFAULT 1024;