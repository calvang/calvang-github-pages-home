import flask
import json
import os.path
import resource_manager
from resource_manager.api.index import BadAccess

@resource_manager.app.route('/api/projects', methods=['GET', 'POST'])
def projects():
    '''Retrieve projects data from json.'''
    response = dict()
    try:
        file_path = os.path.join(os.path.dirname(__file__), '../data/projects.json')
        print(file_path)
        with open(file_path, 'r') as projects_file:
            json_data = projects_file.read()
            response = json.loads(json_data)
    except:
        raise BadAccess(
            'Not Found',
            status_code=404,
            content="Projects data could not be retrieved."
        )
    return flask.jsonify(response)

@resource_manager.app.route('/api/projects/add', methods=['POST'])
def add_project():
    '''Add project to json data.'''
    response = []
    try:
        with open('projects.json', 'r') as projects_file:
            json_data = projects_file.read()
            projects_data = json.loads(json_data)
        
        projects_data = []
        for i, project in enumerate(projects):
            projects_data.append(project)
        if flask.request.method == 'POST':
            try:
                # write a backup of the current data
                with open('projects_backup.json', 'w') as backup_file:
                    backup_file.write(json.dumps(projects, indent=4))
                # overwrite current data with new project
                with open('projects', 'w') as outfile:
                    outfile.write(json.dumps(projects_data, indent=4))
                response
                return 
            except:
                raise BadAccess(
                    'Not Found',
                    status_code=404,
                    payload="Projects data could not be written."
                )
    except:
        raise BadAccess(
            'Not Found',
            status_code=404,
            payload="Projects data could not be retrieved."
        )

    return flask.jsonify({ 'text': 'Hello World2!' })