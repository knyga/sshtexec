##SSHtexec
SSHtexec - tool to run (execute) commands on preconfigured set of remote machines via ssh. Could be used in combination with ci tool like jenkins or bamboo.

###Installation
1. Install module: `npm install sshtexec`.
2. Copy config.json.dist to config.json and edit environments list: 'cp config.json.dist config.json'.
3. Make sshtexec executable: `chmod +x sshtexec.sh`.
4. Optional. Make sshtexec global: `ln -s ...full_path_to_sshtexec.sh /usr/local/bin/sshtexec`.

###Use
In your ci tool you can create tasks to execute scripts: `sshtexec -e=live -u=ubuntu bash /ddsdc1/www/api.example/deploy.sh -f`. It will allow you to do deployments easier.

###Licence
Copyright 2016 Oleksandr Knyga <oleksandrknyga@gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
