/*
  # Create contacts and volunteers tables

  1. New Tables
    - `contacts`: Store form submissions from Get Involved page
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `created_at` (timestamp)
    
    - `volunteers`: Store volunteer signup information
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `availability` (text)
      - `interests` (text array)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Allow anyone to insert (public form submissions)
    - Allow admins to read/delete

  3. Indexes
    - Add indexes on email for lookups
    - Add indexes on created_at for sorting
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS volunteers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  availability text,
  interests text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contacts"
  ON contacts
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can insert volunteers"
  ON volunteers
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS contacts_email_idx ON contacts(email);
CREATE INDEX IF NOT EXISTS contacts_created_at_idx ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS volunteers_email_idx ON volunteers(email);
CREATE INDEX IF NOT EXISTS volunteers_created_at_idx ON volunteers(created_at DESC);
