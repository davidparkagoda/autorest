/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.13.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package fixtures.requiredoptional;

import com.google.common.reflect.TypeToken;
import com.microsoft.rest.ServiceCallback;
import com.microsoft.rest.ServiceException;
import com.microsoft.rest.ServiceResponse;
import com.microsoft.rest.ServiceResponseBuilder;
import com.microsoft.rest.ServiceResponseCallback;
import com.squareup.okhttp.ResponseBody;
import fixtures.requiredoptional.models.Error;
import retrofit.Call;
import retrofit.Response;
import retrofit.Retrofit;

public class ImplicitImpl implements Implicit {
    private ImplicitService service;
    AutoRestRequiredOptionalTestService client;

    public ImplicitImpl(Retrofit retrofit, AutoRestRequiredOptionalTestService client) {
        this.service = retrofit.create(ImplicitService.class);
        this.client = client;
    }

    /**
     * Test implicitly required path parameter
     *
     * @param pathParameter the String value
     * @return the Error object if successful.
     * @throws ServiceException the exception wrapped in ServiceException if failed.
     */
    public ServiceResponse<Error> getRequiredPath(String pathParameter) throws ServiceException {
        if (pathParameter == null) {
            throw new ServiceException(
                new IllegalArgumentException("Parameter pathParameter is required and cannot be null."));
        }
        try {
            Call<ResponseBody> call = service.getRequiredPath(pathParameter);
            return getRequiredPathDelegate(call.execute(), null);
        } catch (ServiceException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new ServiceException(ex);
        }
    }

    /**
     * Test implicitly required path parameter
     *
     * @param pathParameter the String value
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<ResponseBody> getRequiredPathAsync(String pathParameter, final ServiceCallback<Error> serviceCallback) {
        if (pathParameter == null) {
            serviceCallback.failure(new ServiceException(
                new IllegalArgumentException("Parameter pathParameter is required and cannot be null.")));
            return null;
        }
        Call<ResponseBody> call = service.getRequiredPath(pathParameter);
        call.enqueue(new ServiceResponseCallback<Error>(serviceCallback) {
            @Override
            public void onResponse(Response<ResponseBody> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(getRequiredPathDelegate(response, retrofit));
                } catch (ServiceException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Error> getRequiredPathDelegate(Response<ResponseBody> response, Retrofit retrofit) throws ServiceException {
        return new ServiceResponseBuilder<Error>()
                .registerError(new TypeToken<Error>(){}.getType())
                .build(response, retrofit);
    }

    /**
     * Test implicitly optional query parameter
     *
     * @param queryParameter the String value
     * @throws ServiceException the exception wrapped in ServiceException if failed.
     */
    public ServiceResponse<Void> putOptionalQuery(String queryParameter) throws ServiceException {
        try {
            Call<ResponseBody> call = service.putOptionalQuery(queryParameter);
            return putOptionalQueryDelegate(call.execute(), null);
        } catch (ServiceException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new ServiceException(ex);
        }
    }

    /**
     * Test implicitly optional query parameter
     *
     * @param queryParameter the String value
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<ResponseBody> putOptionalQueryAsync(String queryParameter, final ServiceCallback<Void> serviceCallback) {
        Call<ResponseBody> call = service.putOptionalQuery(queryParameter);
        call.enqueue(new ServiceResponseCallback<Void>(serviceCallback) {
            @Override
            public void onResponse(Response<ResponseBody> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(putOptionalQueryDelegate(response, retrofit));
                } catch (ServiceException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Void> putOptionalQueryDelegate(Response<ResponseBody> response, Retrofit retrofit) throws ServiceException {
        return new ServiceResponseBuilder<Void>()
                .register(200, new TypeToken<Void>(){}.getType())
                .registerError(new TypeToken<Error>(){}.getType())
                .build(response, retrofit);
    }

    /**
     * Test implicitly optional header parameter
     *
     * @param queryParameter the String value
     * @throws ServiceException the exception wrapped in ServiceException if failed.
     */
    public ServiceResponse<Void> putOptionalHeader(String queryParameter) throws ServiceException {
        try {
            Call<ResponseBody> call = service.putOptionalHeader(queryParameter);
            return putOptionalHeaderDelegate(call.execute(), null);
        } catch (ServiceException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new ServiceException(ex);
        }
    }

    /**
     * Test implicitly optional header parameter
     *
     * @param queryParameter the String value
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<ResponseBody> putOptionalHeaderAsync(String queryParameter, final ServiceCallback<Void> serviceCallback) {
        Call<ResponseBody> call = service.putOptionalHeader(queryParameter);
        call.enqueue(new ServiceResponseCallback<Void>(serviceCallback) {
            @Override
            public void onResponse(Response<ResponseBody> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(putOptionalHeaderDelegate(response, retrofit));
                } catch (ServiceException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Void> putOptionalHeaderDelegate(Response<ResponseBody> response, Retrofit retrofit) throws ServiceException {
        return new ServiceResponseBuilder<Void>()
                .register(200, new TypeToken<Void>(){}.getType())
                .registerError(new TypeToken<Error>(){}.getType())
                .build(response, retrofit);
    }

    /**
     * Test implicitly optional body parameter
     *
     * @param bodyParameter the String value
     * @throws ServiceException the exception wrapped in ServiceException if failed.
     */
    public ServiceResponse<Void> putOptionalBody(String bodyParameter) throws ServiceException {
        try {
            Call<ResponseBody> call = service.putOptionalBody(bodyParameter);
            return putOptionalBodyDelegate(call.execute(), null);
        } catch (ServiceException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new ServiceException(ex);
        }
    }

    /**
     * Test implicitly optional body parameter
     *
     * @param bodyParameter the String value
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<ResponseBody> putOptionalBodyAsync(String bodyParameter, final ServiceCallback<Void> serviceCallback) {
        Call<ResponseBody> call = service.putOptionalBody(bodyParameter);
        call.enqueue(new ServiceResponseCallback<Void>(serviceCallback) {
            @Override
            public void onResponse(Response<ResponseBody> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(putOptionalBodyDelegate(response, retrofit));
                } catch (ServiceException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Void> putOptionalBodyDelegate(Response<ResponseBody> response, Retrofit retrofit) throws ServiceException {
        return new ServiceResponseBuilder<Void>()
                .register(200, new TypeToken<Void>(){}.getType())
                .registerError(new TypeToken<Error>(){}.getType())
                .build(response, retrofit);
    }

    /**
     * Test implicitly required path parameter
     *
     * @return the Error object if successful.
     * @throws ServiceException the exception wrapped in ServiceException if failed.
     */
    public ServiceResponse<Error> getRequiredGlobalPath() throws ServiceException {
        if (this.client.getRequiredGlobalPath() == null) {
            throw new ServiceException(
                new IllegalArgumentException("Parameter this.client.getRequiredGlobalPath() is required and cannot be null."));
        }
        try {
            Call<ResponseBody> call = service.getRequiredGlobalPath(this.client.getRequiredGlobalPath());
            return getRequiredGlobalPathDelegate(call.execute(), null);
        } catch (ServiceException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new ServiceException(ex);
        }
    }

    /**
     * Test implicitly required path parameter
     *
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<ResponseBody> getRequiredGlobalPathAsync(final ServiceCallback<Error> serviceCallback) {
        if (this.client.getRequiredGlobalPath() == null) {
            serviceCallback.failure(new ServiceException(
                new IllegalArgumentException("Parameter this.client.getRequiredGlobalPath() is required and cannot be null.")));
            return null;
        }
        Call<ResponseBody> call = service.getRequiredGlobalPath(this.client.getRequiredGlobalPath());
        call.enqueue(new ServiceResponseCallback<Error>(serviceCallback) {
            @Override
            public void onResponse(Response<ResponseBody> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(getRequiredGlobalPathDelegate(response, retrofit));
                } catch (ServiceException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Error> getRequiredGlobalPathDelegate(Response<ResponseBody> response, Retrofit retrofit) throws ServiceException {
        return new ServiceResponseBuilder<Error>()
                .registerError(new TypeToken<Error>(){}.getType())
                .build(response, retrofit);
    }

    /**
     * Test implicitly required query parameter
     *
     * @return the Error object if successful.
     * @throws ServiceException the exception wrapped in ServiceException if failed.
     */
    public ServiceResponse<Error> getRequiredGlobalQuery() throws ServiceException {
        if (this.client.getRequiredGlobalQuery() == null) {
            throw new ServiceException(
                new IllegalArgumentException("Parameter this.client.getRequiredGlobalQuery() is required and cannot be null."));
        }
        try {
            Call<ResponseBody> call = service.getRequiredGlobalQuery(this.client.getRequiredGlobalQuery());
            return getRequiredGlobalQueryDelegate(call.execute(), null);
        } catch (ServiceException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new ServiceException(ex);
        }
    }

    /**
     * Test implicitly required query parameter
     *
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<ResponseBody> getRequiredGlobalQueryAsync(final ServiceCallback<Error> serviceCallback) {
        if (this.client.getRequiredGlobalQuery() == null) {
            serviceCallback.failure(new ServiceException(
                new IllegalArgumentException("Parameter this.client.getRequiredGlobalQuery() is required and cannot be null.")));
            return null;
        }
        Call<ResponseBody> call = service.getRequiredGlobalQuery(this.client.getRequiredGlobalQuery());
        call.enqueue(new ServiceResponseCallback<Error>(serviceCallback) {
            @Override
            public void onResponse(Response<ResponseBody> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(getRequiredGlobalQueryDelegate(response, retrofit));
                } catch (ServiceException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Error> getRequiredGlobalQueryDelegate(Response<ResponseBody> response, Retrofit retrofit) throws ServiceException {
        return new ServiceResponseBuilder<Error>()
                .registerError(new TypeToken<Error>(){}.getType())
                .build(response, retrofit);
    }

    /**
     * Test implicitly optional query parameter
     *
     * @return the Error object if successful.
     * @throws ServiceException the exception wrapped in ServiceException if failed.
     */
    public ServiceResponse<Error> getOptionalGlobalQuery() throws ServiceException {
        try {
            Call<ResponseBody> call = service.getOptionalGlobalQuery(this.client.getOptionalGlobalQuery());
            return getOptionalGlobalQueryDelegate(call.execute(), null);
        } catch (ServiceException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new ServiceException(ex);
        }
    }

    /**
     * Test implicitly optional query parameter
     *
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     */
    public Call<ResponseBody> getOptionalGlobalQueryAsync(final ServiceCallback<Error> serviceCallback) {
        Call<ResponseBody> call = service.getOptionalGlobalQuery(this.client.getOptionalGlobalQuery());
        call.enqueue(new ServiceResponseCallback<Error>(serviceCallback) {
            @Override
            public void onResponse(Response<ResponseBody> response, Retrofit retrofit) {
                try {
                    serviceCallback.success(getOptionalGlobalQueryDelegate(response, retrofit));
                } catch (ServiceException exception) {
                    serviceCallback.failure(exception);
                }
            }
        });
        return call;
    }

    private ServiceResponse<Error> getOptionalGlobalQueryDelegate(Response<ResponseBody> response, Retrofit retrofit) throws ServiceException {
        return new ServiceResponseBuilder<Error>()
                .registerError(new TypeToken<Error>(){}.getType())
                .build(response, retrofit);
    }

}
