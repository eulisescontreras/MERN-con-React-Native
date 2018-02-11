export const fetchUsers = () => fetch('https://rnative-nslawvdccm.now.sh/clients/list', {
                                        method: 'GET'
                                     }).then(res => res.json())
                                     .then(res => res);