#!/bin/bash
# Simple script to start flask backend

cd resource_manager
source env/bin/activate
FLASK_APP=__init__.py flask run