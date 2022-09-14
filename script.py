from pathlib import Path
import re

pathlist = Path("./").glob('**/*.css')
for path in pathlist:
     # because path is object not string
     path_in_str = str(path)
     #if ("node_modules" in path_in_str):
     #    continue
     try:
        with open("./" + path_in_str) as file:
             str_file = file.read()
             started = False
             for i in range(len(str_file)-1):
                 if (not started and str_file[i] + str_file[i+1] == "/*"):
                     started = True
                 elif (started and str_file[i]+str_file[i+1] == "/*"):
                     print(path_in_str)
                     exit()
                 elif (started and str_file[i]+str_file[i+1] == "*/"):
                     started = False
                 elif (not started and str_file[i]+str_file[i+1] == "*/"):
                     print(path_in_str)
                     exit()
     except:
         pass
        


