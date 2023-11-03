import interceptors from "./axiosBase";
import { toast } from "react-toastify";
import { interceptorsPost } from "./axiosBase";
import { CTRL_BASEURL } from "../constant/constant";

const ENV_BUILD = CTRL_BASEURL;

export async function getRemoteHistory(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/vncaccess/getByStoreIdOrUserName`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function getGroupInfoById(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/group/info`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function getStoreInfo(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/store/info`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    toast.error(errorUser.message);
               } else {
               }
               return Promise.reject(errorUser);
          });
}

export async function updateStore(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/store/create-update`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function addMultipleGroup(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/user/create-update`, data)
          .then(function (res) {
               console.log("data tra ve ", res);
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function deleteUser(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/group/removeUser`, data)
          .then(function (res) {
               console.log("data tra ve ", res);
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function getUserInfo(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/user/info`, data)
          .then(function (res) {
               console.log("data tra ve ", res);
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function addUserToGroup(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/group/addUser`, data)
          .then(function (res) {
               console.log("data tra ve ", res);
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function addGroup(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/group/create-update`, data)
          .then(function (res) {
               console.log("data tra ve ", res);
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function getSshInfo(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/ssh/request-access`, data)
          .then(function (res) {
               console.log("data tra ve ", res);
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function addPort(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/organization/port/create-update`, data)
          .then(function (res) {
               console.log("data tra ve ", res);
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function getAllPort(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/organization/port/list`, data)
          .then(function (res) {
               console.log("data tra ve ", res);
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function getOrganization(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/organization/list`, data)
          .then(function (res) {
               console.log("data tra ve ", res);
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function addRole(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/user/grant-role`, data)
          .then(function (res) {
               console.log("data tra ve ", res);
               return res.data;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function deleteRole(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/user/delete-role`, data)
          .then(function (res) {
               console.log("data tra ve ", res);
               return res.data;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function getRoles(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/user/list-roles`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function getStoreList(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/store/list`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function getPort(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/organization/port/list`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function areaInfo(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/area/info`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function requestAccess(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/vnc/request-access`, data)
          .then(function (res) {
               return res.data;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function sendTest(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/area/send-test-linenotify`, data)
          .then(function (res) {
               console.log("res.data", res.data);
               return res.data;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function deleteDevice(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/device/delete`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function getAllMonitor(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/firewall/device/list-monitor-devices`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function updateStatus(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/user/create-update`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function addDevice(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/device/create-update`, data)
          .then(function (res) {
               console.log("resNe", res);
               return res.data;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}
export async function sendEvent(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/firewall/event/send`, data)
          .then(function (res) {
               console.log("res", res);
               return res.data.object;
          })
          .catch(function (errorUser) {
               console.log("error User", errorUser);
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (!errorUser?.response) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function getFWConfig(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/firewall/device/config`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function getFireWallById(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/firewall/device/info`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function getFireWall(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/firewall/device/list`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function createUpdateArea(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/area/create-update`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function getAreaList(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/area/list`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }
               return Promise.reject(errorUser);
          });
}

export async function createUpdateRole(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/role/create-update`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }

               return Promise.reject(errorUser);
          });
}

export async function groupChangeUser(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/group/changeUsers`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }

               return Promise.reject(errorUser);
          });
}
export async function getAllUser(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/user/list`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }

               return Promise.reject(errorUser);
          });
}

export async function groupChangeRole(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/group/changeRoles`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }

               return Promise.reject(errorUser);
          });
}

export async function getListFireWall(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/firewall/device/info`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }

               return Promise.reject(errorUser);
          });
}

export async function getGroupList(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/group/list`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }

               return Promise.reject(errorUser);
          });
}

export async function getListRoleById(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/group/listRoles`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }

               return Promise.reject(errorUser);
          });
}

export async function getListUsersById(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/group/listUsers`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }

               return Promise.reject(errorUser);
          });
}

export async function getAllRole(data) {
     return interceptorsPost
          .post(`${ENV_BUILD}/api/admin/role/list`, data)
          .then(function (res) {
               return res.data.object;
          })
          .catch(function (errorUser) {
               if (errorUser?.response?.status == 400) {
                    toast.error(errorUser.response.data.errorReason);
               } else if (errorUser.response.status == 404) {
                    console.log("lỗi 404");
                    toast.error(errorUser.message);
               } else {
                    toast.error("Internal server error");
               }

               return Promise.reject(errorUser);
          });
}
